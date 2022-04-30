function main(){
    const gmailSearchString: string = "notifications@timerex.net";

    const threads = GmailApp.search(gmailSearchString,0,1);
    const latestMail = GmailApp.getMessagesForThreads(threads)[0][0];
}