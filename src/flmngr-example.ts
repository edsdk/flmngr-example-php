import {IFile, openFlmngr} from '@edsdk/flmngr';

window.addEventListener("DOMContentLoaded", function() {
	document.getElementById('btn1').addEventListener('click', function() {
		openFlmngr({
			urlFileManager: 'http://localhost:8080/flmngr.php',
			useImageEditor: true,
			onOk: (files: IFile[]) => {

                let elFiles = document.getElementById('files1');
                elFiles.innerHTML = "";
				for (let file of files) {
					let elFile = document.createElement("div");
					elFile.innerHTML = `${file.name} (${file.size})`;
					elFiles.appendChild(elFile);
				}

			},
		});
	});
});
