# Comandos SEO para Programador - Quinta Casa do Plátano

## 🔍 Comandos de Análise e Procura

### Procurar Tags HTML Específicas
```powershell
# Procurar todas as tags <title>
Get-ChildItem -Recurse -Include "*.tsx","*.html" | Select-String "<title"

# Procurar meta descriptions
Get-ChildItem -Recurse -Include "*.tsx","*.html" | Select-String "meta.*description"

# Procurar canonical tags
Get-ChildItem -Recurse -Include "*.tsx","*.html" | Select-String "canonical"

# Procurar Google Analytics
Get-ChildItem -Recurse -Include "*.tsx","*.html","*.js" | Select-String "gtag\|google-analytics\|GA_"

# Procurar Schema.org/JSON-LD
Get-ChildItem -Recurse -Include "*.tsx","*.html" | Select-String "schema.org\|@type"
```

### Análise de Imagens
```powershell
# Listar imagens maiores que 150KB
Get-ChildItem -Path "public" -Filter "*.webp","*.jpg","*.png" | Where-Object {$_.Length -gt 150KB} | Select-Object Name, @{Name="SizeKB";Expression={[math]::Round($_.Length/1KB,2)}} | Sort-Object SizeKB -Descending

# Listar imagens maiores que 500KB (prioridade alta)
Get-ChildItem -Path "public" -Filter "*.webp","*.jpg","*.png" | Where-Object {$_.Length -gt 500KB} | Select-Object Name, @{Name="SizeKB";Expression={[math]::Round($_.Length/1KB,2)}}

# Verificar alt tags em imagens
Get-ChildItem -Recurse -Include "*.tsx" | Select-String "<img.*alt="
```

### Análise de URLs e Routing
```powershell
# Procurar definições de rotas
Get-ChildItem -Recurse -Include "*.tsx","*.js" | Select-String "path=\|Route"

# Procurar componentes de páginas
Get-ChildItem -Path "src/pages" -Filter "*.tsx" | Select-Object Name
```

## 📝 Ficheiros a Modificar

### 1. Implementar Google Analytics
**Ficheiro:** `public/index.html`
**Localização:** Dentro da tag `<head>`
```html
<!-- Adicionar antes do </head> -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Adicionar Google Search Console Verification
**Ficheiro:** `public/index.html`
**Localização:** Dentro da tag `<head>`
```html
<meta name="google-site-verification" content="VERIFICATION_CODE" />
```

### 3. Optimizar Meta Tags Homepage
**Ficheiro:** `src/pages/Home.tsx`
**Procurar:** Componente `<SEO`
**Substituir title e description por:**
```tsx
<SEO
  title="Venda de Borregos Vendéen Puro | Quinta Casa do Plátano"
  description="Produtores de borregos Vendéen (linha pura, registo genealógico). Venda e envio a partir de Samora Correia — contacto 926 852 863."
  // ... resto das props
/>
```

### 4. Criar Página /venda-de-borregos
**Ficheiro:** `src/pages/VendaBorregos.tsx` (novo)
**Rota:** Adicionar em `src/App.tsx`

### 5. Adicionar Schema Product
**Ficheiro:** `src/pages/VendaBorregos.tsx` ou `src/pages/OurSheep.tsx`
**Adicionar no structuredData:**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Borrego Vendéen Puro",
  "description": "Borrego da raça Vendéen com registo genealógico",
  "brand": {
    "@type": "Brand",
    "name": "Quinta Casa do Plátano"
  },
  "category": "Ovinos",
  "additionalProperty": [
    {"@type": "PropertyValue", "name": "breed", "value": "Vendéen"},
    {"@type": "PropertyValue", "name": "registrationNumber", "value": "PT-VENDEEN-2024-XXX"},
    {"@type": "PropertyValue", "name": "age", "value": "6 meses"},
    {"@type": "PropertyValue", "name": "weight", "value": "25-30 kg"}
  ]
}
```

## 🖼️ Optimização de Imagens

### Imagens Prioritárias para Optimização
```powershell
# Comando para identificar as 5 maiores imagens
Get-ChildItem -Path "public" -Filter "*.webp" | Sort-Object Length -Descending | Select-Object -First 5 | Select-Object Name, @{Name="SizeKB";Expression={[math]::Round($_.Length/1KB,2)}}
```

**Resultado esperado:**
1. `heroSection-Ovelha.webp` (842KB → target: <300KB)
2. `heroSection-Ovelha-optimized.webp` (693KB → target: <250KB)
3. `IMG-20250721-WA0008.webp` (549KB → target: <200KB)
4. `IMG-20250721-WA0007.webp` (531KB → target: <200KB)

### Comando para Optimização (usando Sharp/ImageMagick)
```bash
# Se tiver Sharp instalado
npx sharp-cli --input public/heroSection-Ovelha.webp --output public/heroSection-Ovelha-compressed.webp --webp-quality 75

# Ou usando ImageMagick
magick public/heroSection-Ovelha.webp -quality 75 public/heroSection-Ovelha-compressed.webp
```

## 🗂️ Estrutura de Ficheiros Recomendada

### Páginas em Falta (criar)
```
src/pages/
├── VendaBorregos.tsx     # /venda-de-borregos
├── RacaVendeen.tsx       # /raca-vendeen  
├── FAQ.tsx               # /faq-borregos
└── Servicos.tsx          # /servicos (renomear de Services)
```

### Actualizar Rotas em App.tsx
```tsx
// Adicionar estas rotas
<Route path="/venda-de-borregos" element={<VendaBorregos />} />
<Route path="/raca-vendeen" element={<RacaVendeen />} />
<Route path="/faq-borregos" element={<FAQ />} />
<Route path="/servicos" element={<Servicos />} />
```

## 🔧 Verificações Pós-Implementação

### Comandos de Teste
```powershell
# Verificar se GA foi implementado
Get-ChildItem -Recurse -Include "*.html" | Select-String "gtag"

# Verificar novas páginas criadas
Get-ChildItem -Path "src/pages" -Filter "*Borrego*","*Vendeen*","*FAQ*"

# Verificar sitemap actualizado
Get-Content "public/sitemap.xml" | Select-String "venda-de-borregos\|raca-vendeen"

# Verificar tamanho das imagens optimizadas
Get-ChildItem -Path "public" -Filter "*compressed*","*optimized*" | Select-Object Name, @{Name="SizeKB";Expression={[math]::Round($_.Length/1KB,2)}}
```

### URLs para Testar Localmente
```
http://localhost:5173/
http://localhost:5173/venda-de-borregos
http://localhost:5173/raca-vendeen
http://localhost:5173/faq-borregos
http://localhost:5173/sobre (renomeado de /about)
```

## 📊 Monitorização

### Ferramentas para Validar
1. **Google PageSpeed Insights:** https://pagespeed.web.dev/
2. **Schema Markup Validator:** https://validator.schema.org/
3. **Google Rich Results Test:** https://search.google.com/test/rich-results
4. **Lighthouse:** Executar no DevTools do Chrome

### Métricas a Acompanhar
- **LCP (Largest Contentful Paint):** Target <2.5s
- **CLS (Cumulative Layout Shift):** Target <0.1
- **FID/INP:** Target <100ms
- **Tamanho total das imagens:** Redução de ~3MB esperada

## 🚀 Prioridades de Implementação

### Semana 1 (Crítico)
1. ✅ Implementar Google Analytics
2. ✅ Adicionar GSC verification
3. ✅ Optimizar 5 imagens maiores

### Semana 2 (Alto)
1. ✅ Criar página /venda-de-borregos
2. ✅ Adicionar Schema Product
3. ✅ Melhorar meta descriptions

### Semana 3 (Médio)
1. ✅ Renomear URLs para português
2. ✅ Criar páginas /raca-vendeen e /faq-borregos
3. ✅ Actualizar sitemap.xml

---

**Nota:** Substitua `GA_MEASUREMENT_ID` e `VERIFICATION_CODE` pelos valores reais fornecidos pelo Google Analytics e Search Console.