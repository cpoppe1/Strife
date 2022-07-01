import * as DmMemberAPI from "../utils/dm_member_api_util.js";


export const RECEIVE_DM_MEMBER = "RECEIVE_DM_MEMBER";
export const REMOVE_DM_MEMBER = "REMOVE_DM_MEMBER";


export const receiveDmMember = (dm_member) => {
  return{
    type: RECEIVE_DM_MEMBER, 
    dm_member
  }
}

export const removeDmMember = (dm_member_hash) => {
  return{
    type: REMOVE_DM_MEMBER, 
    dm_member_hash
  }
}

export const createDmMember = (dm_member) => (dispatch) => 
DmMemberAPI.createDmMember(dm_member).then((dm_member) => dispatch(receiveDmMember(dm_member)))

export const deleteDmMember = (dm_memberId, dm_member) => (dispatch) => 
DmMemberAPI.deleteDmMember(dm_memberId,dm_member).then(( dm_member_hash) => dispatch(removeDmMember( dm_member_hash)))
 
