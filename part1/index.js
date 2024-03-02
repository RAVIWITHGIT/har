console.log('hello world')
const fs = require('fs');

function createFolders(folders) {
  folders.forEach(folder => {
    fs.mkdir(folder, { recursive: true }, (err) => {
      if (err) {
        console.error(`Error creating folder '${folder}':`, err);
      } else {
        console.log(`Folder '${folder}' created successfully.`);
      }
    });
  });
}

// Example usage
// const foldersToCreate = ['folder1', 'folder2', 'folder3'];
foldersToCreate = []
for (let i = 1; i < 11; i++) {
    foldersToCreate.push(`tut${i}`)
    
}
createFolders(foldersToCreate);
