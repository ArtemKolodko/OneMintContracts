const { expect } = require("chai");

describe("Voting contract", function () {
    let Voting;
    let hardhatVoting;

    beforeEach(async function () {
        Voting = await ethers.getContractFactory("Voting");
        hardhatVoting = await Voting.deploy();
    });

  describe("Votings", function () {
    it("Should set main key", async function () {
        const mainKey = 'main_key'
        await hardhatVoting.setMainKey(mainKey);
        const mainKeyResult = await hardhatVoting.getMainKey();
        expect(mainKeyResult).to.equal(mainKey);
    });

    it("Should add vote", async function () {
        const [owner] = await ethers.getSigners();
        const vote = 'qwerty12345'
        await hardhatVoting.addVote('tx_id', vote);
        const voteResult = await hardhatVoting.getVote(owner.address);
        expect(voteResult).to.equal(vote);
    });
  });
});
