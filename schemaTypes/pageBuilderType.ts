import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'pageBuilder',
  type: 'array',
  of: [
    defineArrayMember({type: 'hero'}),
    defineArrayMember({type: 'mediaImage'}),
    defineArrayMember({type: 'mediaGrid'}),
    defineArrayMember({type: 'videoRecording'}),
    defineArrayMember({type: 'blockBanner'}),
    defineArrayMember({type: 'downloads'}),
    defineArrayMember({type: 'event'}),
    defineArrayMember({type: 'blockContent'}),
    defineArrayMember({type: 'button'}),
    defineArrayMember({type: 'customComponent'}),
  ],
})
