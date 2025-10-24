// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TriviaLeaderboard {
    mapping(address => uint256) public scores;

    event ScoreUpdated(address user, uint256 score);

    function updateScore(uint256 score) public {
        scores[msg.sender] = score;
        emit ScoreUpdated(msg.sender, score);
    }

    function getScore(address user) public view returns (uint256) {
        return scores[user];
    }
}