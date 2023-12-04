CREATE PROCEDURE IF NOT EXISTS CreateUser(
    IN in_name VARCHAR(50),
    IN in_email VARCHAR(100),
    IN in_password VARCHAR(100)
)
BEGIN
    INSERT INTO users (name, email, password)
    VALUES (in_name, in_email, in_password);
END;



