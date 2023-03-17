pragma solidity >= 0.5.0  <0.9.0;
contract abc{
    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }
    Memo[] memo;
    address payable owner;
    constructor()
    {
        owner=payable(msg.sender);
    }
    function  buychai(string memory name,string memory message) public payable{
        require(msg.value>0,"please try again");
        owner.transfer(msg.value);
memo.push(Memo(name,message,block.timestamp,msg.sender));
    }

function getview() public view returns(Memo[]memory){
    return memo;
}
}