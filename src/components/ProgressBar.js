// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// const TaskItem = ({ item }) => {
//   return (
//     <TouchableOpacity style={{
//       backgroundColor: item.completed ? '#e8f5e9' : '#fff',
//       padding: 15,
//       borderRadius: 10,
//       marginBottom: 10,
//       borderWidth: 1,
//       borderColor: '#e0e0e0',
//       flexDirection: 'row',
//       justifyContent: 'space-between'
//     }}>
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <View style={{
//           width: 24,
//           height: 24,
//           borderRadius: 12,
//           borderWidth: 2,
//           borderColor: item.completed ? '#4CAF50' : '#757575',
//           marginRight: 15,
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: item.completed ? '#4CAF50' : 'transparent'
//         }}>
//           {item.completed && <Text style={{ color: 'white' }}>✓</Text>}
//         </View>
//         <Text style={{ fontSize: 16 }}>{item.title}</Text>
//       </View>
//       <Text style={{ color: '#FFC107' }}>+{item.points} pts</Text>
//     </TouchableOpacity>
//   );
// };

// export default TaskItem;