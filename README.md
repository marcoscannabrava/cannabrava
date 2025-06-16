### simple site



Reason to move out of Gatsby someday: 
I just want to serve simple static assets per page. To do that...
```sh
rm -rf public .cache
npm run build
npm run serve
# npm run dev does not work
```
and every asset is serve on all routes which is ok while the site is small...