
const main = async () => {
  const [owner, s0, s1, s2, s3, s4, s5, s6] = await hre.ethers.getSigners();
  const spotifyContractFactory = await hre.ethers.getContractFactory('SpotifyPortal');
  const spotifyContract = await spotifyContractFactory.deploy();
  await spotifyContract.deployed();
  console.log("Contract deployed to:", spotifyContract.address); 
  console.log("Contract deployed by:", owner.address);
  // console.log(owner)
  // console.log(randomPerson)
  let linkCount;
  linkCount = await spotifyContract.getTotalLinks();
  let addresses = [];

  let spotifyTxn = await spotifyContract.connect(s1).sendLink();
  addresses.push(s1.address)
  spotifyTxn = await spotifyContract.connect(s2).sendLink();
  addresses.push(s2.address)
  spotifyTxn = await spotifyContract.connect(s3).sendLink();
  addresses.push(s3.address)
  spotifyTxn = await spotifyContract.connect(s4).sendLink();
  addresses.push(s4.address)
  spotifyTxn = await spotifyContract.connect(s5).sendLink();
  addresses.push(s5.address)
  spotifyTxn = await spotifyContract.connect(s6).sendLink();
  addresses.push(s6.address)

  let linkCountConst = 100;

  for (let i = 0; i < linkCountConst; i++) {
    let sNum = `s${i}`
    
  }

  await spotifyTxn.wait();

  linkCount = await spotifyContract.getTotalLinks();
  console.log(addresses)
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