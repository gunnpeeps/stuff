async function getData(id) {
  return await (
    await fetch(`https://api.brawlstars.com/v1/players/%23${id}`, {
      headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjlkNzI1NDFiLTA5NTUtNDYyYS05MGE2LTYzNWY1ZDYwNjEzNSIsImlhdCI6MTU5NzUwOTI1NCwic3ViIjoiZGV2ZWxvcGVyLzJmNmU5ZmY1LTE4NmEtZTRhOS03MmMwLTNiZDA5Zjg0Y2VlMyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNzYuMTc2LjY5LjE0NyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.3EXa8GEWWw4CORHXXAfTK_FoLNju4TuSXOsFEb_SlzrXjAupTg9qyTA1VK34fNFrFpAx2j2A_gr_IUtyktsvVw",
        "User-Agent": "BrawlStars.js https://github.com/pollen5/brawlstars.js",
        "Accept": "application/json"
      }
    })
  ).json();
}

console.log(getData("CYV90URJ"));