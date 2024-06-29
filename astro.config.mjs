import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'
import { externalLink } from './src/externalLink.ts'
import { rehypePrettyCode } from 'rehype-pretty-code'
// import moonlightTheme from './public/theme/moonlight-ii.json'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import { transformerNotationDiff } from '@shikijs/transformers'

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
					// theme: moonlightTheme,
					transformers: [
						transformerCopyButton({
							visibility: 'hover',
							feedbackDuration: 2_500
						})
						// transformerNotationDiff()
					]
				}
			]
		]
	},
	integrations: [mdx(), sitemap(), tailwind()]
})
