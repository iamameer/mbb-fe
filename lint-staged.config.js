export default {
  "**/*.(ts|js)": (filenames) => {
    const escapedFileNames = filenames.map((filename) => `"${filename}"`);
    return [
      `eslint --fix ${escapedFileNames.join(" ")}`,
      `prettier --write ${escapedFileNames.join(" ")}`,
    ];
  },
};
