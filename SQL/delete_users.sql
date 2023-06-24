USE `vk`;
DROP function IF EXISTS `func_5`;

DELIMITER $$
USE `vk`$$
CREATE FUNCTION func_5(check_user_id BIGINT UNSIGNED)
RETURNS FLOAT READS SQL DATA
BEGIN
	DECLARE result INT;    
    
	DELETE FROM `vk`.`users` WHERE (`id` = check_user_id);
    
    set result = check_user_id;


	RETURN result;
END$$

DELIMITER ;