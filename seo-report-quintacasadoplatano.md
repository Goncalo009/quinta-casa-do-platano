# Relatório SEO - Quinta Casa do Plátano
**Domínio:** quintacasadoplatano.pt  
**Data da Auditoria:** 19 Dezembro 2024  
**Auditor:** SEO Técnico Especializado em Quintas Agrícolas  

---

## A. RESUMO EXECUTIVO

**Problemas Críticos Identificados:**
O site tem uma base SEO sólida mas está a perder oportunidades comerciais importantes. **Faltam páginas comerciais essenciais** (/venda-de-borregos, /raca-vendeen), **não há Google Analytics implementado** e **várias imagens são demasiado pesadas** (>500KB). 

**3 Acções Imediatas Prioritárias:**
1. **Implementar Google Analytics/GA4** - CRÍTICO para tracking
2. **Criar página /venda-de-borregos** - ALTO impacto comercial  
3. **Optimizar imagens >500KB** - ALTO impacto na performance

---

## B. SCORES GERAIS

| Categoria | Score | Estado |
|-----------|-------|--------|
| **Score Geral** | **72/100** | 🟡 Bom |
| On-page (texto, headings, meta) | 85/100 | 🟢 Muito Bom |
| Técnico (HTTPS, robots, sitemap, canonical) | 90/100 | 🟢 Excelente |
| Performance (Core Web Vitals) | 45/100 | 🔴 Precisa Melhorar |
| Local SEO (GBP, NAP, reviews, schema) | 70/100 | 🟡 Bom |
| Conteúdo/Autoridade | 60/100 | 🟡 Médio |

---

## C. PROBLEMAS DETALHADOS

### CRÍTICOS

#### 1. Google Analytics/GA4 Ausente
- **Descrição:** Não foi detectado Google Analytics ou GA4 no site
- **Severidade:** CRÍTICO
- **Impacto SEO:** 9/10
- **Esforço:** Rápido (<1h)
- **Como corrigir:**
```html
<!-- Adicionar ao index.html antes do </head> -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### 2. Google Search Console Verification Ausente
- **Descrição:** Meta tag de verificação GSC não encontrada
- **Severidade:** CRÍTICO  
- **Impacto SEO:** 8/10
- **Esforço:** Rápido (<1h)
- **Como corrigir:**
```html
<meta name="google-site-verification" content="VERIFICATION_CODE" />
```

### ALTOS

#### 3. Imagens Demasiado Pesadas
- **Descrição:** 12 imagens >150KB, algumas >500KB (heroSection-Ovelha.webp: 842KB)
- **Severidade:** ALTO
- **Impacto SEO:** 8/10  
- **Esforço:** Médio (2-4h)
- **Imagens problemáticas:**
  - heroSection-Ovelha.webp: 842.45KB
  - heroSection-Ovelha-optimized.webp: 693.19KB
  - IMG-20250721-WA0008.webp: 549.54KB
  - IMG-20250721-WA0007.webp: 531.11KB
- **Como corrigir:** Comprimir imagens para <150KB usando ferramentas como TinyPNG ou Sharp

#### 4. Páginas Comerciais Essenciais em Falta
- **Descrição:** Faltam páginas comerciais chave para conversão
- **Severidade:** ALTO
- **Impacto SEO:** 9/10
- **Esforço:** Alto (1-3 dias)
- **Páginas em falta:** /venda-de-borregos, /raca-vendeen, /faq-borregos

#### 5. Schema Product Ausente
- **Descrição:** Não há schema markup para produtos (borregos)
- **Severidade:** ALTO
- **Impacto SEO:** 7/10
- **Esforço:** Médio (2-4h)

### MÉDIOS

#### 6. URLs em Inglês
- **Descrição:** URLs como /about, /our-sheep, /services em inglês
- **Severidade:** MÉDIO
- **Impacto SEO:** 6/10
- **Esforço:** Alto (1-3 dias)
- **Como corrigir:** Implementar redirects 301 para URLs em português

#### 7. Meta Descriptions Genéricas
- **Descrição:** Algumas meta descriptions podem ser mais comerciais
- **Severidade:** MÉDIO  
- **Impacto SEO:** 5/10
- **Esforço:** Rápido (<1h)

### BAIXOS

#### 8. Breadcrumbs Ausentes
- **Descrição:** Não há breadcrumbs implementados
- **Severidade:** BAIXO
- **Impacto SEO:** 4/10
- **Esforço:** Médio (2-4h)

---

## D. FIXES RÁPIDOS (TOP 6)

1. **Implementar Google Analytics** - 30min, impacto 9/10
2. **Adicionar GSC verification** - 15min, impacto 8/10  
3. **Optimizar 5 imagens mais pesadas** - 2h, impacto 8/10
4. **Melhorar meta description homepage** - 15min, impacto 6/10
5. **Adicionar schema Product básico** - 1h, impacto 7/10
6. **Criar página /venda-de-borregos básica** - 3h, impacto 9/10

---

## E. PÁGINAS EM FALTA / RECOMENDAÇÕES

### 1. /venda-de-borregos
- **H1:** "Venda de Borregos Vendéen Puro - Quinta Casa do Plátano"
- **H2 sugeridos:**
  - "Borregos Vendéen Disponíveis para Venda"
  - "Preços e Condições de Venda"  
  - "Certificações e Registo Genealógico"
- **Meta Title:** "Venda de Borregos Vendéen Puro | Quinta Casa do Plátano"
- **Meta Description:** "Borregos Vendéen de linha pura com registo genealógico. Venda directa do produtor em Samora Correia. Contacte 926 852 863 para disponibilidade."

### 2. /raca-vendeen  
- **H1:** "Raça Ovina Vendéen - Características e Vantagens"
- **H2 sugeridos:**
  - "História e Origem da Raça Vendéen"
  - "Características Físicas e Produtivas"
  - "Vantagens da Criação de Vendéen em Portugal"
- **Meta Title:** "Raça Ovina Vendéen - Características | Quinta Casa do Plátano"
- **Meta Description:** "Conheça a raça ovina Vendéen: características, vantagens produtivas e adaptação ao clima português. Especialistas em Vendéen há 5 anos."

### 3. /sobre (melhorar existente)
- **H1:** "Sobre a Quinta Casa do Plátano - 5 Anos de Ovinocultura"
- **H2 sugeridos:**
  - "História da Nossa Quinta em Samora Correia"
  - "Certificações e Reconhecimentos"
  - "Compromisso com a Sustentabilidade"

### 4. /contactos (melhorar existente)
- **H1:** "Contactos - Quinta Casa do Plátano | Samora Correia"
- **H2 sugeridos:**
  - "Informações de Contacto"
  - "Localização e Como Chegar"
  - "Horários de Funcionamento"

### 5. /faq-borregos
- **H1:** "Perguntas Frequentes sobre Borregos Vendéen"
- **H2 sugeridos:**
  - "Sobre a Compra de Borregos"
  - "Cuidados e Maneio"
  - "Transporte e Entrega"

---

## F. SNIPPETS PRONTOS PARA COPY/PASTE

### Meta Tags Homepage
```html
<!-- Opção 1: SERP Optimizada -->
<title>Venda de Borregos Vendéen Puro | Quinta Casa do Plátano</title>
<meta name="description" content="Produtores de borregos Vendéen (linha pura, registo genealógico). Venda e envio a partir de Samora Correia — contacto 926 852 863." />

<!-- Opção 2: Comercial -->
<title>Quinta Casa do Plátano - Criadores de Borregos Vendéen Premium em Samora Correia</title>
<meta name="description" content="5 anos de experiência na criação de borregos Vendéen de elite. Linha pura, certificados, entrega em Portugal. Visite-nos em Samora Correia!" />
```

### Meta Tags /venda-de-borregos
```html
<title>Venda de Borregos Vendéen - Preços e Disponibilidade | Quinta Casa do Plátano</title>
<meta name="description" content="Borregos Vendéen disponíveis para venda. Linha pura, registo genealógico, certificados sanitários. Contacte 926 852 863 para preços actuais." />
```

### JSON-LD LocalBusiness
```json
{
  "@context": "https://schema.org",
  "@type": "Farm",
  "name": "Quinta Casa do Plátano",
  "url": "https://quintacasadoplatano.pt",
  "telephone": "+351926852863",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Samora Correia",
    "addressLocality": "Samora Correia", 
    "addressRegion": "Ribatejo",
    "postalCode": "2135",
    "addressCountry": "PT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.9167,
    "longitude": -8.8167
  },
  "openingHours": "Mo-Sa 08:00-18:00",
  "priceRange": "€€",
  "description": "Criação especializada de ovelhas Vendéen em Samora Correia",
  "areaServed": "Portugal",
  "sameAs": []
}
```

### JSON-LD Product (Borrego)
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
  "breed": "Vendéen",
  "registrationNumber": "PT-VENDEEN-2024-XXX",
  "age": "6 meses",
  "weight": "25-30 kg",
  "sex": "Macho/Fêmea",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "EUR",
    "seller": {
      "@type": "Organization",
      "name": "Quinta Casa do Plátano"
    }
  }
}
```

### OpenGraph Tags
```html
<meta property="og:title" content="Venda de Borregos Vendéen Puro | Quinta Casa do Plátano" />
<meta property="og:description" content="Produtores de borregos Vendéen com registo genealógico em Samora Correia. 5 anos de experiência." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://quintacasadoplatano.pt" />
<meta property="og:image" content="https://quintacasadoplatano.pt/logoOficial.webp" />
<meta property="og:locale" content="pt_PT" />
<meta property="og:site_name" content="Quinta Casa do Plátano" />
```

### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Venda de Borregos Vendéen Puro | Quinta Casa do Plátano" />
<meta name="twitter:description" content="Produtores de borregos Vendéen com registo genealógico em Samora Correia." />
<meta name="twitter:image" content="https://quintacasadoplatano.pt/logoOficial.webp" />
```

### Canonical Tag
```html
<link rel="canonical" href="https://quintacasadoplatano.pt/" />
```

### Robots.txt Optimizado
```
User-agent: *
Allow: /

# Sitemap
Sitemap: https://quintacasadoplatano.pt/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /private/
Disallow: /_next/
Disallow: /api/

# Allow important pages
Allow: /
Allow: /sobre
Allow: /venda-de-borregos
Allow: /raca-vendeen
Allow: /contactos
Allow: /faq-borregos

Crawl-delay: 1
```

### Sitemap.xml Expandido
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://quintacasadoplatano.pt/</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://quintacasadoplatano.pt/venda-de-borregos</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://quintacasadoplatano.pt/raca-vendeen</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://quintacasadoplatano.pt/sobre</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://quintacasadoplatano.pt/contactos</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://quintacasadoplatano.pt/faq-borregos</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

---

## G. CHECKLIST DE IMPLEMENTAÇÃO POR PRIORIDADE

### CRÍTICO
- [ ] **Implementar Google Analytics/GA4** (Front-end) - 30min
- [ ] **Adicionar Google Search Console verification** (Front-end) - 15min

### ALTO  
- [ ] **Optimizar imagens >500KB** (Servidor/Assets) - 2-4h
- [ ] **Criar página /venda-de-borregos** (Front-end + Conteúdo) - 1 dia
- [ ] **Implementar schema Product** (Front-end) - 2h
- [ ] **Criar página /raca-vendeen** (Front-end + Conteúdo) - 4h

### MÉDIO
- [ ] **Implementar redirects URLs PT** (Back-end/Servidor) - 1 dia  
- [ ] **Melhorar meta descriptions** (Conteúdo) - 2h
- [ ] **Criar página /faq-borregos** (Front-end + Conteúdo) - 4h
- [ ] **Adicionar breadcrumbs** (Front-end) - 4h

### BAIXO
- [ ] **Implementar reviews schema** (Front-end) - 2h
- [ ] **Adicionar mais structured data** (Front-end) - 3h
- [ ] **Optimizar URLs internas** (Front-end) - 2h

---

## H. SUGESTÕES DE TÓPICOS DE BLOG (12 ARTIGOS)

1. **"Como Escolher Borregos Vendéen para Criação em Portugal"**
   - Palavra-chave: "borregos vendéen portugal"
   - Intenção: Informacional/Comercial

2. **"Vantagens da Raça Ovina Vendéen no Clima Português"**  
   - Palavra-chave: "raça ovina vendéen portugal"
   - Intenção: Informacional

3. **"Preços de Borregos Vendéen em 2024 - Guia Completo"**
   - Palavra-chave: "preço borregos vendéen"
   - Intenção: Comercial

4. **"Criação de Ovelhas em Samora Correia - Condições Ideais"**
   - Palavra-chave: "criação ovelhas samora correia"
   - Intenção: Local SEO

5. **"Registo Genealógico de Ovinos - Importância e Processo"**
   - Palavra-chave: "registo genealógico ovinos"
   - Intenção: Informacional

6. **"Alimentação de Ovelhas Vendéen - Guia Prático"**
   - Palavra-chave: "alimentação ovelhas vendéen"
   - Intenção: Informacional

7. **"Reprodução de Ovelhas Vendéen - Melhores Práticas"**
   - Palavra-chave: "reprodução ovelhas vendéen"
   - Intenção: Informacional

8. **"Ovinocultura Sustentável no Ribatejo - Casos de Sucesso"**
   - Palavra-chave: "ovinocultura ribatejo"
   - Intenção: Local SEO

9. **"Diferenças entre Raças Ovinas Portuguesas e Francesas"**
   - Palavra-chave: "raças ovinas portugal"
   - Intenção: Informacional

10. **"Investir em Ovinocultura - Retorno e Viabilidade"**
    - Palavra-chave: "investir ovinocultura portugal"
    - Intenção: Comercial

11. **"Transporte de Ovinos - Regulamentação e Boas Práticas"**
    - Palavra-chave: "transporte ovinos portugal"
    - Intenção: Informacional

12. **"Quinta Casa do Plátano - 5 Anos de Inovação na Ovinocultura"**
    - Palavra-chave: "quinta casa do plátano"
    - Intenção: Branding

---

## I. REGISTO DE URLs ANALISADAS

| URL | Title | Meta Description | H1 | Status |
|-----|-------|------------------|----|---------| 
| / | Quinta Casa do Plátano - Criação de Ovelhas Vendéen em Samora Correia | Quinta Casa do Plátano: 5 anos de experiência... | Quinta Casa do Plátano | ✅ |
| /about | Sobre Nós - Quinta Casa do Plátano | Conheça a história da Quinta Casa do Plátano... | Quinta Casa do Plátano - Ovinocultura Especializada | ✅ |
| /our-sheep | As Nossas Ovelhas Vendéen - Quinta Casa do Plátano | Conheça as nossas ovelhas da raça Vendéen... | As Nossas Ovelhas | ✅ |
| /contact | Contactos - Quinta Casa do Plátano | Entre em contacto connosco... | Contacte-nos | ✅ |
| /services | Serviços - Quinta Casa do Plátano | Serviços especializados... | Os Nossos Serviços | ✅ |

---

## COMANDOS / GREP PARA PROGRAMADORES

### Procurar títulos existentes:
```bash
grep -r "<title>" src/
grep -r "title=" src/components/SEO.tsx
```

### Procurar meta descriptions:
```bash
grep -r "meta.*description" src/
grep -r "description=" src/components/SEO.tsx
```

### Procurar canonical tags:
```bash
grep -r "canonical" src/
grep -r "rel=\"canonical\"" public/
```

### Listar imagens grandes:
```powershell
Get-ChildItem "public\*.webp" | Where-Object {$_.Length -gt 150KB}
```

### Procurar Google Analytics:
```bash
grep -r "gtag\|analytics\|GA_" src/
grep -r "google-analytics" public/
```

### Procurar structured data:
```bash
grep -r "application/ld+json" src/
grep -r "@context.*schema.org" src/
```

### Verificar robots.txt:
```bash
cat public/robots.txt
```

### Verificar sitemap:
```bash
cat public/sitemap.xml
```

---

**Próximos Passos Recomendados:**
1. Implementar Google Analytics (CRÍTICO)
2. Criar página /venda-de-borregos (ALTO)  
3. Optimizar imagens pesadas (ALTO)
4. Configurar Google Search Console (CRÍTICO)
5. Implementar schema Product (MÉDIO)

**Contacto para Suporte Técnico:** Disponível para implementação e acompanhamento das melhorias identificadas.