# Testing TypeScript version of SAP CAP

Use this simple repository for testing Typescript version of CAP. Mainly [CAPier : Using TypeScript](https://cap.cloud.sap/docs/node.js/typescript) is original reference for this matter, but I had issue using Jest, so I will create this repository.

## Preparation
- Clone this repository to Business Application Studio
- Run `npm i -g typescript ts-node`
- Run `npm i`

## How to test CAP service implemented by TypeScript
- Run `npm test` to unit test service
  - Using `ts-mocha` you can start unit test file `./test/service.test.ts`.
- Run `npm start` to start service locally, then open `./test/service.http` to run GET request.
  - Using `cds-ts` to start service even service implementation file is still TypeScript.


