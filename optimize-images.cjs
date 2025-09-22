const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Lista das 5 maiores imagens que precisam ser otimizadas
const imagesToOptimize = [
  'heroSection-Ovelha.webp',
  'heroSection-Ovelha-optimized.webp',
  'IMG-20250721-WA0008.webp',
  'IMG-20250721-WA0007.webp',
  'IMG-20250721-WA0006.webp'
];

async function optimizeImage(imageName) {
  const inputPath = path.join('public', imageName);
  const outputPath = path.join('public', `optimized-${imageName}`);
  
  try {
    console.log(`Otimizando ${imageName}...`);
    
    // Verificar tamanho original
    const originalStats = fs.statSync(inputPath);
    const originalSize = Math.round(originalStats.size / 1024);
    
    await sharp(inputPath)
      .webp({ 
        quality: 80,
        effort: 6,
        lossless: false
      })
      .toFile(outputPath);
    
    // Verificar tamanho otimizado
    const optimizedStats = fs.statSync(outputPath);
    const optimizedSize = Math.round(optimizedStats.size / 1024);
    const reduction = Math.round(((originalSize - optimizedSize) / originalSize) * 100);
    
    console.log(`✅ ${imageName}: ${originalSize}KB → ${optimizedSize}KB (${reduction}% redução)`);
    
    // Substituir arquivo original pelo otimizado
    fs.renameSync(outputPath, inputPath);
    
  } catch (error) {
    console.error(`❌ Erro ao otimizar ${imageName}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Iniciando otimização das imagens...\n');
  
  for (const imageName of imagesToOptimize) {
    const imagePath = path.join('public', imageName);
    
    if (fs.existsSync(imagePath)) {
      await optimizeImage(imageName);
    } else {
      console.log(`⚠️  Imagem não encontrada: ${imageName}`);
    }
  }
  
  console.log('\n✨ Otimização concluída!');
}

// Executar otimização
optimizeAllImages().catch(console.error);