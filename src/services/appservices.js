
let appservice = {
  getTeam: () => {
    let team = []
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: {}
      })
    })
  },

  getTeamMember(id) {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: {}
      })
    })
  },
  getAllEvents: () => {
    let events = []
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: {}
      })
    })
  },

  getAllCustomEvents: () => {
    let events = []
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: {}
      })
    })
  },

  getEvent: (id) => {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: {}
      })
    })
  },

  getSpeaker: (id) => {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: {}
      })
    })
  },

  getAllSpeakers: () => {
    let speakers = []
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: {}
      })
    })
  },

  getFeaturesEvents: () => {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: {}
      })
    })
  },

  getAllPartners: () => {
    let partners = []
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: {}
      })
    })
  },

  getAllConfig: () => {
    let config = []
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: {}
      })
    })
  },

  getAllUpcomingMeetupsEvents: (id) => {
    return new Promise((resolve, reject) => {
      fetch(
          "https://cors-anywhere.herokuapp.com/https://api.meetup.com/" + id + "/events?&sign=true"
        ).then(res => res.json()).then(data => {
            resolve({
              success: true,
              data: data
            })
        })
        .catch(e => {
          reject(e)
        });
    })
  },
  getCommunityGuidelines: () => {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: {}
      })
    })
  },

  getAllMeetupPastEvents: (id) => {
    return new Promise((resolve, reject) => {
      fetch(
          "https://cors-anywhere.herokuapp.com/https://api.meetup.com/" + id + "/events?desc=true&photo-host=public&page=300&status=past&sign=true"
        ).then(res => res.json()).then(data => {
            resolve({
              success: true,
              data: data
            })
        })
        .catch(e => {
          reject(e)
        });
    })
  },

  getAllMediumBlogs: (id) => {
    return new Promise((resolve, reject) => {
      let baseURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/" + id

      fetch(baseURL).then(res => res.json()).then(data => {
          if (data.items.length > 0) {
            resolve({
              success: true,
              data: data
            })
          }
        })
        .catch(e => {
          reject(e)
        });
    })
  },

  getPartner: (id) => {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: {}
      })
    })
  },
}

export default appservice