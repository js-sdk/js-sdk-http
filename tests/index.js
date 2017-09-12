import { HttpStatus } from '../src/status.js';
import * as H from '../src/index.js';

describe("HTTP", () => {
  context("status", () => {
    it("check export through status or index.", () => {
      HttpStatus.should.be.eql(H.HttpStatus);
    });
  });
});
