const http = require('http');
const jsonData = {
  "What is NodeJS" : "NodeJS is a Single Threded non-blocking Operation",
  "How Nodejs handles a file request" : "1. Sends the task to the computer's file system <br> 2. Ready to handle the next request. 3.When the file system has opened and read the file, the server returns the content to the client.",
  "Info":"Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.",
  "Benifits of NodeJS" : "1.Great performance! 2.Node was designed to optimize throughput and scalability in web applications and is a good solution for many common web-development problems (e.g. real-time web applications). <br> 3.The node package manager (npm) provides access to hundreds of thousands of reusable packages. <br> 4. Node.js is portable. 5. It is available on Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS, and NonStop OS. Furthermore, it is well-supported by many web hosting providers, that often provide specific infrastructure and documentation for hosting Node sites. 6. It has a very active third party ecosystem and developer community, with lots of people who are willing to help."

}

const firstHandson = http.createServer((request, response) => {
  if(request.url == '/'){
    response.write('<html>')
    response.write('<body>')

    response.write('<h1>What is NodeJS?</h1>')
    response.write('<h3>NodeJS is a Single Threded non-blocking Operation</h3>')

    response.write('<h1>How Nodejs handles a file request?</h1>')
    response.write('<h3>NodeJS is a Single Threded non-blocking Operation</h3>')

    response.write('<h1>Benifits of NodeJS?</h1>')
    response.write('<h3>1.Great performance! 2.Node was designed to optimize throughput and scalability in web applications and is a good solution for many common web-development problems (e.g. real-time web applications). <br> 3.The node package manager (npm) provides access to hundreds of thousands of reusable packages. <br> 4. Node.js is portable. 5. It is available on Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS, and NonStop OS. Furthermore, it is well-supported by many web hosting providers, that often provide specific infrastructure and documentation for hosting Node sites. 6. It has a very active third party ecosystem and developer community, with lots of people who are willing to help.</h3>')

   
   

    response.write('</body>')
    response.write('<html>')
    response.end()
  }
  else if(request.url == '/jsondata'){
    const data = JSON.stringify(jsonData)
    console.log(data)
    response.write(data)
    response.end()

  }
})

firstHandson.listen(3001, () => {
    console.log('server is running in port 3001')
})