var BrowserHistory = /** @class */ (function () {
    function BrowserHistory(homepage) {
        this.paths = [];
        this.pointer = 0;
        this.paths.push(homepage);
    }
    BrowserHistory.prototype.visit = function (url) {
        this.paths.splice(this.pointer + 1);
        this.paths.push(url);
        this.pointer++;
    };
    BrowserHistory.prototype.back = function (steps) {
        this.pointer = this.pointer - Math.min(steps, this.pointer);
        console.log("back", this.paths, this.pointer);
        return this.paths[this.pointer];
    };
    BrowserHistory.prototype.forward = function (steps) {
        this.pointer = this.pointer + Math.min(steps, this.paths.length - this.pointer + 1);
        console.log("forward", this.paths, this.pointer);
        return this.paths[this.pointer];
    };
    return BrowserHistory;
}());
var browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com"); // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com"); // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com"); // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(1); // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(1); // You are in "facebook.com", move back to "google.com" return "google.com"
browserHistory.forward(1); // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com"); // You are in "facebook.com". Visit "linkedin.com"
browserHistory.forward(2); // You are in "linkedin.com", you cannot move forward any steps.
browserHistory.back(2); // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
browserHistory.back(7); // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
