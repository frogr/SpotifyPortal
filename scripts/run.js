
const main = async () => {
  const spotifyContractFactory = await hre.ethers.getContractFactory('SpotifyPortal');
  const spotifyContract = await spotifyContractFactory.deploy();
  await spotifyContract.deployed();
  console.log("Contract deployed to:", spotifyContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();