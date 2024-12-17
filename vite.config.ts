import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: [
        'vue',
        'vitest'
        // {
        //   '@testing-library/vue': [
        //     'render',
        //     'fireEvent',
        //     ['screen', 'vtlScreen'],
        //     'cleanup'
        //   ]
        // }
      ],
      dts: './auto-imports.d.ts'
    })
  ]
});
