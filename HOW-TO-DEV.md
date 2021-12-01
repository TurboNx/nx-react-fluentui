# DEV

## Tour and Remarks
```shell
nx g @nrwl/react:lib ui --directory=shared --style=css
nx g @nrwl/react:component topic-button --project=shared-ui --style=css
nx g @nrwl/react:storybook-configuration shared-ui
nx storybook shared-ui
nx build-storybook shared-ui
http-server dist/storybook/shared-ui
```
