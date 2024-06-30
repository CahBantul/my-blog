import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'
import { rehypePrettyCode } from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'

// https://astro.build/config
export default defineConfig({
	site: 'https://programmertelo.vercel.app/', // Write here your website url
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		syntaxHighlight: false,
		rehypePlugins: [
			[
				rehypePrettyCode,
				{
					transformers: [
						transformerCopyButton({
							visibility: 'hover',
							feedbackDuration: 2_500
						})
					]
				}
			]
		]
	},
	integrations: [mdx(), sitemap(), tailwind()]
})
