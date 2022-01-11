function formatDuration (seconds) {
    let initialSeconds = seconds
    let years = Math.floor(seconds / 31536000)
    seconds %=31536000
    let days = Math.floor(seconds / 86400)
    seconds %=86400
    let hours = Math.floor(seconds / 3600)
    seconds %=3600
    let minutes = Math.floor(seconds / 60)
    let s = seconds % 60
    
    const yearHandler = (v) => {
      if (v == 0)
        return ''
      else if (v == 1)
        return '1 year'
      else {
        return v+' years'
        }
    }
    
    const dayHandler = (v) => {
      if (v == 0)
        return ''
      else if (v == 1)
        return '1 day'
      else {
        if ( years > 0) {
          return ', '+v+' days'
        } else {
          return v + ' days'
        }
      }
    }
    
    const hourHandler = (v) => {
      if (v == 0)
        return ''
      else if (v == 1 && days == 0 && years == 0)
        return '1 hour'
      else if(v == 1 && s == 0 && (days > 0 || years >0 ))
        return 'and 1 hour'
      else if(v == 1 && (days > 0 || years > 0))
        return ', 1 hour'
      else {
        if ( years > 0 || days > 0) {
          return ', '+v+' hours'
        } else {
          return v + ' hours'
        }
      }
    }
    
    const minuteHandler = (v) => {
      if (initialSeconds == 0)
        return 'now'
      if (v == 0)
        return ''
      else if (v == 1 && (years == 0 && days == 0 && hours == 0))
        return '1 minute'
      else if (v == 1 && s == 0 && (years > 0 || days > 0 || hours > 0))
        return 'and 1 minute'
      else if (v == 1 && (years > 0 || days > 0 || hours > 0))
        return ', 1 minute'
      else {
        if ( s>0 && (years > 0 || days > 0 || hours > 0)) {
          return ', '+v+' minutes'
        } else if (s == 0 && (years > 0 || days > 0 || hours > 0)) {
          return ' and '+v+' minutes'
        } else {
          return v + ' minutes'
        }
      }
    }
    
    const secondHandler = (v) => {
      if (v == 0)
        return ''
      else if (v ==1) {
        if (years > 0 || days > 0 || hours > 0 || minutes > 0)
          return ' and 1 second'
        else {
          return '1 second'
          }
      }
       else {
         if (years > 0 || days > 0 || hours > 0 || minutes > 0) {
           return ' and '+v+' seconds'
       } else {
          return v + ' seconds'
         }
      }
    }
    
    return (yearHandler(years) + dayHandler(days) + hourHandler(hours)+ minuteHandler(minutes)+ secondHandler(s))
  }