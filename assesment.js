/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let minttNFT = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (enm,edpt,esal,edoj) {
    let NFT ={enm,edpt,esal,edoj};
    minttNFT.push(NFT);
};

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i =0; i<minttNFT.length;i++){
        console.log("\nID              : " + (i+1));
        console.log("NAME   : " + minttNFT[i].enm);
        console.log("DEPARTMENT   : " + minttNFT[i].edpt);
        console.log("SALARY   : " + minttNFT[i].esal);
        console.log("DATE OF JOINING   : " + minttNFT[i].edoj;
        console.log("\t");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n TOTAL NUMBER OF NFTs  :"+minttNFT.length);
}

// call your functions below this line
mintNFT("VISHAL","GRAPHICS","80000","25-MAY-2024");
mintNFT("AMIT","GAMING","70000","25-JAN-2024");
mintNFT("SHUBHANKAR","WEB DESIGNING","60000","25-FEB-2024");
mintNFT("PRATIYUSH","TESTING","90000","20-MAR-2022");
listNFTs();
getTotalSupply();
