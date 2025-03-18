import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
//import tslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: import.meta.dirname,
                createDefaultProgram: true,
                projectService: {
                  allowDefaultProject: ["eslint.config.mjs", "./build/*.js", "./src/*.ts"],
                  defaultProject: "tsconfig.json",
              },
                // loadTypeScriptPlugins: !!process.env.VSCODE_PID,
                sourceType: "module",
            },
        },
    rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-require-imports": "off"
   },
  },

);