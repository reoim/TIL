# 7 Restful Routes

| **URL** | **HTTP Verb** |  **Action**| **Description** |
|------------|-------------|------------|------------|
| /dogs/         | GET       | index  | Display all list of dog
| /dogs/new      | GET       | new    | Displays form to make a new dog
| /dogs          | POST      | create | Add new dog to DB  
| /dogs/:id      | GET       | show   | Shows info about dog    
| /dogs/:id/edit | GET       | edit       
| /dogs/:id      | PATCH/PUT | update    
| /dogs/:id      | DELETE    | destroy  
