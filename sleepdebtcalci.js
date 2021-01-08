const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 8;
    } else if (day === 'wednesday') {
      return 8; 
    } else if (day === 'thursday') {
      return 8;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') { 
        return 8;
    } else {
      return 'Input is not a valid day'
    }
  }
  //Test function with console log printout.
  console.log(getSleepHours('tuesday'))
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') 
  
  //Test function output
  console.log(getActualSleepHours())
  
  const getIdealSleepHours = (num) => {
    const idealHours = num
    return idealHours * 7;
  }
    
  console.log(getIdealSleepHours(6))
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours()
    console.log(actualSleepHours)
    idealSleepHours = getIdealSleepHours(5)
    console.log(idealSleepHours)
    if (actualSleepHours === idealSleepHours) {
      console.log('User got the perfect amount of sleep')} 
    else if (actualSleepHours > idealSleepHours) {
      console.log('User got more sleep than needed')}
    else if (actualSleepHours < idealSleepHours ){
      console.log('User got less sleep than needed')}
    else {
      console.log('There is an error!')}
  }
  
  calculateSleepDebt()