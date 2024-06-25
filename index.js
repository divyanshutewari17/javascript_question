function countUniqueUsers(data) {
    const uniqueUsers = new Set(data.map(item => item.userId));
    return uniqueUsers.size;
}

function mostCommonActivityType(data) {
    const activityCounts = data.reduce((acc, item) => {
      acc[item.activityType] = (acc[item.activityType] || 0) + 1;
      return acc;
    }, {});
  
    return Object.keys(activityCounts).reduce((a, b) => activityCounts[a] > activityCounts[b] ? a : b);
}

function generateActivityTimeline(data) {
    const userActivities = data.reduce((acc, item) => {
      if (!acc[item.userId]) {
        acc[item.userId] = [];
      }
      acc[item.userId].push({
        activityType: item.activityType,
        timestamp: item.timestamp
      });
      return acc;
    }, {});
  
    // Sort activities by timestamp for each user
    for (const userId in userActivities) {
      userActivities[userId].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    }
  
    return userActivities;
}

const data = [
    { userId: 1, activityType: 'login', timestamp: '2024-06-14T10:00:00Z' },
    { userId: 2, activityType: 'view', timestamp: '2024-06-14T11:00:00Z' },
    { userId: 1, activityType: 'logout', timestamp: '2024-06-14T12:00:00Z' },
    { userId: 3, activityType: 'login', timestamp: '2024-06-14T10:30:00Z' },
    { userId: 2, activityType: 'login', timestamp: '2024-06-14T10:15:00Z' },
    { userId: 1, activityType: 'view', timestamp: '2024-06-14T10:20:00Z' },
    { userId: 3, activityType: 'logout', timestamp: '2024-06-14T12:30:00Z' },
];

console.log(countUniqueUsers(data)); // Output: 3
console.log(mostCommonActivityType(data)); // Output: 'login'
console.log(generateActivityTimeline(data));
  
  
  