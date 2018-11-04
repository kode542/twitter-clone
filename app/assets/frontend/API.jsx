import serverActions from "./actions/ServerActions";

export default {
  getAllTweets(){
    $.get("/tweets")
    .success( rawTweets => serverActions.receivedTweets( rawTweets ) )
    .error(error => console.log( error ) );
  }
}
