// all .md files in this directory will be processed
// specify from the root of your project
const postsDirectory = '/src/content/blog/'
import { exec } from 'child_process'

// Find and replace strings
const findFirst = '../../../src/assets/images' // update this path based on where files are located
let replaceFirst = '/src/assets/images'

replaceFirst = replaceFirst.replaceAll('.', '\\.')
// Special characters (https://en.wikipedia.org/wiki/Regular_expression#POSIX_basic_and_extended) need to be escaped

// execute bash command
exec(
	`find ${process.cwd()}${postsDirectory} -type f -name '*.mdx' -print0 | xargs -0 sed -i -e 's:${findFirst}:${replaceFirst}:g'`,
	// GNU sed that runs on Linux but not on mac
	(error, stdout, stderr) => {
		// error handling
		if (error) {
			console.log(`error: ${error.message}`)
			return
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`)
			return
		}
		// success
		console.log(stdout)
		console.log('🖼️ Successfully replaced asset paths pertama')
	}
)

// Fungsi untuk melakukan sesuatu setelah 2 detik
function doSomething() {
	console.log('Waktu 2 detik telah berlalu. Tindakan dilakukan.')
	// Tempatkan tindakan yang ingin Anda lakukan di sini
	// Find and replace strings
	const find = '/src/assets/images'
	let replace = '../../../src/assets/images' // update this path based on where files are located

	replace = replace.replaceAll('.', '\\.')
	// Special characters (https://en.wikipedia.org/wiki/Regular_expression#POSIX_basic_and_extended) need to be escaped

	// execute bash command
	exec(
		`find ${process.cwd()}${postsDirectory} -type f -name '*.mdx' -print0 | xargs -0 sed -i -e 's:${find}:${replace}:g'`,
		// GNU sed that runs on Linux but not on mac
		(error, stdout, stderr) => {
			// error handling
			if (error) {
				console.log(`error: ${error.message}`)
				return
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`)
				return
			}
			// success
			console.log(stdout)
			console.log('🖼️ Successfully replaced asset paths kedua')
		}
	)
}

// Atur timeout selama 2 detik
setTimeout(doSomething, 2000)
