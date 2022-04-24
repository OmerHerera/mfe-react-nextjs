## Setup
- In the Root folder run command:
  - `npm install`
- Navigate to react_container folder and run 
  - `npm install`
- Navigate to remote_react folder and run 
  - `npm install`

## Running
- In the Root folder run command:
  - `npm run start`
  - Navigate to [http://localhost:3000](http://localhost:3000)

### react_container

It is a middle-level app, which depends on modules exposed from `remote_react` : component Nav. In the meantime, it also exposes: react, react-dom, it also exposes components: Nav to another app called `remote_react`.

* It is both host and remote.


### remote_react
It is a middle-level app, which depends on modules exposed from `react_container` : react ,react-dom. In the meantime, it also exposes components: Nav to another app called `react_container`.

* It is both host and remote.