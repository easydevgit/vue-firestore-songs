import { db } from '@/firebase/config'
import { collection, onSnapshot, query } from 'firebase/firestore'
import type { Song } from '@/types'
import type { Ref } from 'vue'

export const getSongs = (songs: Ref<Song[]>) => {
  const q = query(collection(db, 'songs'))
  onSnapshot(q, (querySnapshot) => {
    const tempSongs: Song[] = []
    querySnapshot.forEach((doc) => {
      tempSongs.push({ id: doc.id, ...doc.data() } as Song)
    })
    songs.value = tempSongs
  })
}
