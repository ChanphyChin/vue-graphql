import gql from 'graphql-tag'  //引入graphql
export default {
    info: gql `query organizationst($id:String!,$index: Int, $pageSize: Int, $leave: Boolean!,$unallocated:Boolean!){
            organization(id:$id){
                id
                employee(index: $index, pageSize: $pageSize, leave: $leave,unallocated:$unallocated){
                    id
                name
                title
                department {
                    id
                    name
                    
                }
                contacts {
                value
                }
            }
        }
    }`,
    mutateTest: gql`mutation createComment($commentInput: CommentInput) {
        createComment(commentInput: $commentInput) {
            username
            content
        }
    }`
    
}