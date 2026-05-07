import { execSync } from 'child_process';

try {
  console.log('Starting build...');
  execSync('npm run build', { 
    stdio: 'inherit',
    env: { ...process.env, NITRO_PRESET: 'vercel' }
  });
  console.log('Build successful!');
} catch (error) {
  console.error('Build failed!');
  process.exit(1);
}
