// import { MatchReader } from './MatchReader'

// import { Summary } from './Summary'

// const matchReader = MatchReader.fromCsv('football.csv')
// matchReader.load()

// const summary = Summary.winsAnalysisWithHtmlReport('Man United')

// summary.buildAndPrintReport(matchReader.matches)

import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

class App {
  static async run() {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    // Prompt the user for the filename and team name
    const filename = await new Promise<string>(resolve => {
      readline.question('Enter the filename: ', resolve)
    })
    const teamName = await new Promise<string>(resolve => {
      readline.question('Enter the team name: ', resolve)
    })

    // Create the MatchReader and load the data
    const matchReader = MatchReader.fromCsv(filename)
    matchReader.load()

    // Create the Summary and generate the report
    const summary = Summary.winsAnalysisWithHtmlReport(teamName)
    summary.buildAndPrintReport(matchReader.matches)

    readline.close()
  }
}

// Run the app
App.run()
