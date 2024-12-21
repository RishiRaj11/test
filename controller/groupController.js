import Group from "../model/movieSchema.js";
export const groupController=async(req,res)=>{
    try {
        const groups = await Group.find(); // Find all groups in the database
        res.json(groups); // Respond with the groups
      } catch (err) {
        res.status(500).json({ message: 'Error retrieving groups', error: err });
      }
}

export const deleteGroupController=async(req,res)=>{
    console.log()
    try {
        const groupId = req.params.id;  // Extract the ID from the URL
        
        // Find and delete the group by ID
        const deletedGroup = await Group.findByIdAndDelete(groupId);
            
        if (!deletedGroup) {
          return res.status(404).json({ message: 'Group not found' }); // If no group was found
        }
    
        res.json({ message: 'Group deleted successfully', deletedGroup });
      } catch (err) {
        res.status(500).json({ message: 'Error deleting the group', error: err });
      }
}