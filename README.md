# angular-module-federation
Angular Micro Frontend using Module Federation


## Note

:exclamation: To Expose all Routes in a remote service we can expose App Module directly by changing the app routing configuration from forRoot to forChild
        
        exposes: {
          './Module': './src/app/app.module.ts',
        }

        imports: [RouterModule.forChild(routes)],


## Thanks

Big Thanks to the [Subrat Chatterjee](https://github.com/subratchatterjee/)  who motivated me in working on this Project

## Prequisites

- Angular CLI 12
