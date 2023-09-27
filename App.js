import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import { JitsiMeeting } from '@jitsi/react-native-sdk/index';

const App = () => {
  const jitsiMeeting = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <JitsiMeeting
        // eventListeners={eventListeners as any}
        ref={jitsiMeeting}
        userInfo={{
          avatarUrl: 'https://cloudclinicdevapi.azurewebsites.net/media/clinic/Profile/162780e9-7ac0-4880-b0ee-64bd1bed9b09_1692356498175_clinic.jpg',
          displayName: 'Ahmed Ali',
        }}
        style={{ flex: 1 }}
        room={"123456"}
        serverURL={'https://meet.cloudclinic.ai/'} />
    </View>
  )
}

export default App