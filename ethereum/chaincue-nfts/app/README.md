#### Setup

```bash
docker run -it --rm -p 3000:3000 --name node --network host -v ${PWD}:/workdir -w /workdir node:20.2.0 bash -c "\
npm run dev"
```
