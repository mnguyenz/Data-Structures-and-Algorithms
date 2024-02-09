// https://leetcode.com/problems/meeting-rooms-ii/description/

// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.



// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2

// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: 1



// Constraints:

//     1 <= intervals.length <= 104
//     0 <= starti < endi <= 106

function minMeetingRooms(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0]);
  const rooms: number[] = [];
  for (let i = 0; i < intervals.length; i++) {
    if (rooms.length === 0 || !isThereRoom(rooms, intervals[i])) {
      rooms.push(intervals[i][1]);
    }
  }
  return rooms.length;
};

function isThereRoom(rooms: number[], interval: number[]): boolean {
  for (let i = 0; i < rooms.length; i++) {
    if (interval[0] >= rooms[i]) {
      rooms[i] = interval[1];
      return true;
    }
  }
  return false;
}

console.log(minMeetingRooms([[13,15],[1,13]]));
