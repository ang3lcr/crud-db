CREATE PROCEDURE IF NOT EXISTS UpdateUser(
    IN in_id INT,
    IN in_name VARCHAR(50),
    IN in_email VARCHAR(100)
)
BEGIN
    DECLARE user_count INT;

    SELECT COUNT(*) INTO user_count FROM users WHERE id = in_id;

    IF user_count > 0 THEN
        UPDATE users
        SET name = in_name, email = in_email
        WHERE id = in_id;
        SELECT 'User updated' AS result;
    ELSE
        SELECT 'User not found' AS result;
    END IF;
END




