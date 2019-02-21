import fs from 'fs'
import { join } from 'path'
import axios from 'axios'

const getDataAndSaveToJson = async ({ nuxt }) => {
  const { data: currentEvents } = await axios.get('https://www.meetup.com/DublinVueJS/events/json/')
  const pathToData = nuxt.resolver.resolvePath('~/data/')
  const filePath = join(pathToData, 'meetups.json')
  fs.writeFileSync(filePath, JSON.stringify(currentEvents), 'utf8')
}

export default function getDataFromMeetupDotCom() {
  this.nuxt.hook('build:before', getDataAndSaveToJson)
}
