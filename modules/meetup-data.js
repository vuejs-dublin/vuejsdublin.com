import fs from 'fs'
import { join } from 'path'
import axios from 'axios'
import consola from 'consola'

const getDataAndSaveToJson = async ({ nuxt }) => {
  consola.info('Grabbing data from meetup.com')
  const { data: currentEvents } = await axios.get('https://api.meetup.com/DublinVueJS/events?page=200')
  const pathToData = nuxt.resolver.resolvePath('~/data/')
  const filePath = join(pathToData, 'meetups.json')
  fs.writeFileSync(filePath, JSON.stringify(currentEvents), 'utf8')
}

export default function getDataFromMeetupDotCom() {
  this.nuxt.hook('build:before', getDataAndSaveToJson)
}
