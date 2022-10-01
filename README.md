# Desktop-Console-Timer
A timer for computer use, desktop and console.

# Running Desktop Application(Non executable)

To run the desktop version, you have to 
1. Install node.js
2. Open a cmd, in the desktop folder
3. Run <code>npm install --save-dev electron</code>
4. Then <code>npm start</code> . Which runs 

# Convert to exe

1. Do the steps above in Running Desktop Application(Non executable)
2. Open a cmd, in the desktop folder
3. run <code>npm install --save-dev @electron-forge/cli</code>
4. then <code>npx electron-forge import</code>
5. finally <code>npm run make</code>