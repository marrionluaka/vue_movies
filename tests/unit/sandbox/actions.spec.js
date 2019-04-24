import { expect } from 'chai';
import axios from 'axios';
import sinon from 'sinon';
import actions from '@/sandbox/vuex/actions';

describe.only('authenticate', () => {
  let sandbox;
  let axiosStub;
  let promiseStub;
  let commit;

  beforeEach(() => {
    commit = sinon.spy();
    sandbox = sinon.createSandbox();
    axiosStub = sandbox.stub(axios, 'post');
    promiseStub = (isError = false) => new Promise((resolve) => {
      if (isError) throw Error();
      resolve(true);
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('authenticated a user', async () => {
    const username = 'Ben Wallace';
    const password = 'password';
    axiosStub.returns(promiseStub());

    await actions.authenticate({ commit }, { username, password });

    expect(axiosStub.getCall(0).args[0]).to.equal('/api/authenticate');
    expect(axiosStub.getCall(0).args[1]).to.eql({ username, password });
    expect(commit.calledWith('SET_AUTHENTICATED')).to.be.true;
  });

  it('catches an error', async () => {
    try {
      axiosStub.returns(promiseStub(true));
      await actions.authenticate({ commit }, {});
    } catch (e) {
      expect(e.message).to.equal('API Error occurred.');
    }
  });
});
