import express from "express"
import cors from 'cors'
import moment from 'moment'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.get('/api', async (req, res) => {
    try {
        const { slack_name, track } = req.query
        const currentDay = moment().utc().format('dddd')
        const utcTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss') + 'Z'
        const FileUrl = 'https://github.com/Boateng-Pomaa/HGNX_TaskTwo/blob/master/taskTwo.js'
        const RepoUrl = 'https://github.com/Boateng-Pomaa/HGNX_TaskTwo'
        const statusCode = 200

        const response = {
            slack_name: slack_name,
            current_day: currentDay,
            utc_time: utcTime,
            track: track,
            github_file_url: FileUrl,
            github_repo_url: RepoUrl,
            status_code: statusCode
        };

        res.json(response)
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error')
    }
}

)

const port = 5000
app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})