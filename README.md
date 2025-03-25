# 📚 Deploily Documentation

## Prerequisite 

* Visual Studio code [https://code.visualstudio.com/](https://code.visualstudio.com/)
* A working installations of Docker and Docker compose
    - [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)

## Clone the repo

```sh
git clone https://github.com/deploily/deploily-documentation.git
cd deploily-documentation
```

## Project setup using VSCode

Start VSCode 
```bash
code .
```

In the Extensions menu, search for "Remote - Containers" and install it:
![](images/vscode-remote-container.png)


If VSCode dont detect the remote container: 
- open the Command Palette (usually Ctrl or Command + Shift + P) 
- and type ">Remote-Containers: Open Folder in Container", 
- select it and choose the location of this project.

If you are prompted to Rebuild the container do it: 

![](images/devcontainer-rebuild.png)

If the **Rebuild** prompt don't shows up : 
- open the Command Palette (usually Ctrl or Command + Shift + P) 
- and type ">Remote-Containers: Rebuild Container", 
- select it.


## 🛠️ Development

```bash
cd documentation
npm install
npm run start  # ! NOT WORKING
```

## Build

```bash
cd documentation
npm run build
npm run serve
cp -R build/* ../docs/
```

## API Doc using [@stoplight/elements](https://www.npmjs.com/package/@stoplight/elements)

* install packages :
    ```
    @stoplight/elements,buffer,docusaurus-plugin-sass, process , sass, url
    ```

* Add plugins section to `docusaurus.config.js` file

    ```
    .....
    import { ProvidePlugin } from "webpack";
    .......
    ...........
    ..................

    plugins: [
        "docusaurus-plugin-sass",
        // Add custom webpack config to make @stoplight/elements work
        () => ({
        name: "custom-webpack-config",
        configureWebpack: () => {
            return {
            module: {
                rules: [
                {
                    test: /\.m?js/,
                    resolve: {
                    fullySpecified: false,
                    },
                },
                ],
            },
            plugins: [
                new ProvidePlugin({
                process: require.resolve("process/browser"),
                }),
            ],
            resolve: {
                fallback: {
                buffer: require.resolve("buffer"),
                stream: false,
                path: false,
                process: false,
                },
            },
            };
        },
        }),
    ],

    .....

    ```
* Useful examples:

  * [codat-docs](https://github.com/codatio/codat-docs/tree/main)

  * [docusaurus-stoplight-elements](https://github.com/yhuard/docusaurus-stoplight-elements/tree/main)

### Adding New service API Documentation  

To add a new API documentation entry, follow these steps:  

1. **Add the OpenAPI Specification**  
   - Place your `openapi.json` or `openapi.yaml` file under:  
     ```  
     /static/openapi-files/ors-openapi.json  
     ```  

2. **Create an MDX Page**  
   - Inside the `/docs` folder, create an MDX file (e.g., `ors.md`).  

3. **Set Up the API Documentation Renderer**  
   - In the `/pages` folder, create an API documentation renderer that loads the corresponding OpenAPI file.  

4. **Add a Link to the MDX Page**  
   - In the MDX page, include a link to the newly created renderer page. The link will open the documentation in a new window.  

5. **Update the Sidebar Navigation**  
   - Under the `'API Documentation'` category in the sidebar, add the MDX page ID (e.g., `ors-docs`) to ensure it appears in the navigation.  



## Useful links

- [docusaurus docs](https://docusaurus.io/docs)
- [editor-next.swagger.io](https://editor-next.swagger.io/)



