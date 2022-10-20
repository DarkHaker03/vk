

<h2>API:</h2>

<h3>Main page</h3>

<h4>/user</h4>


1. GET: localhost:8081/user
   </br>Return: Json
   </br>{
   </br>"id": 000101,
   </br>"name": "text"
   </br>"email": "text"
    </br>"avatar": "text_url"
    </br>"authorised" : boolean
   </br>"active": boolean
   </br>"roles": [ USER, ADMIN, OWNER]
   </br>"friendList": [000102, 000103 ...],
   </br>}

<h4>/chatPage</h4>

2. GET: localhost:8081/chatPage
   </br>Return: Json Array
   </br>[
   </br>{
   </br>"authorId": 0,
   </br>"chat": {
   </br>"name": "",
   </br>"avatarOfInterlocutor": "userAvatarUrl",
   </br>"lastMessage": {
   </br>"text": "",
   </br>"date": "Date"
   </br>}
   </br>}
   </br>]


<h4>chatPage/message</h4>

3. GET: localhost:8081/chatPage/message
   </br>Query Params (Optional):
   </br> <code>id=</code>(IF = null -> not return message)
   </br>Return: Json 
   </br>{
   </br>message_id: 0,
   </br>chat_id: 0,
    </br>author_id: 0,
    </br>content: "text"
    </br>date: "Date"
    </br>}

4. POST: localhost:8081/chatPage/message
   </br>Body (required): Json
   </br>{
   </br>"message_id": 0, (IF = null -> Create ELSE Update)
   </br>{   
   </br>chat_id: 0,
   </br>author_id: 0,
   </br>content: "text"
   </br>date: "Date"
   </br>}


5. DELETE: localhost:8081/chatPage/message
    </br>IF Query Params (required): <code>id=</code>
    </br>IF id = null
    </br>Return: -> 204 NO CONTENT
    </br>IF found by id end deleted   
    </br>Return: 200 OK ; Deleted: + int numbers of delete
    </br>Else: 404 NOT FOUND

6. TEST: ПРОВЕРКА 


